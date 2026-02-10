class CreateChatsUsersJoinTable < ActiveRecord::Migration[7.2]
  def change
    create_join_table :chats, :users do |t|
      t.index [:chat_id, :user_id]
      t.index [:user_id, :chat_id]
    end
  end
end
