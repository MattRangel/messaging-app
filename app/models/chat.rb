class Chat < ApplicationRecord
  has_many :messages
  has_and_belongs_to_many :users

  scope :of_users, ->(user_ids) {
    joins(:users)
      .group('chats.id')
      .having("COUNT(users.id) = ?", user_ids.size)
      .having("SUM(CASE WHEN users.id IN (?) THEN 1 ELSE 0 END) = ?", user_ids, user_ids.size)
  }

  def self.find_or_create_of_users(user_ids)
    self.of_users(user_ids).first ||
      self.create(user_ids: user_ids)
  end
end
