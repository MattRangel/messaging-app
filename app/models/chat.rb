class Chat < ApplicationRecord
  has_many :messages
  has_and_belongs_to_many :users

  scope :of_users, ->(user_ids) {
    joins(:users)
      .group('chats.id')
      .having("COUNT(users.id) = ?", user_ids.size)
      .having("SUM(CASE WHEN users.id IN (?) THEN 1 ELSE 0 END) = ?", user_ids, user_ids.size)
  }

  def self.find_or_create_of_users(user_ids, name)
    self.of_users(user_ids).first ||
      self.create(user_ids: user_ids, name: name)
  end

  def self.order_by_recent
    Chat.all.includes(:messages).order("messages.created_at DESC NULLS LAST")
  end

  def filtered_json
    self.as_json(
      only: [:id, :name],
      include: {
        users: { only: [:name, :id] },
        messages: { only: [:id, :text, :user_id, :created_at] }
      }
    )
  end
end
