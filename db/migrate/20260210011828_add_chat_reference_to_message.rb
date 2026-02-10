class AddChatReferenceToMessage < ActiveRecord::Migration[7.2]
  def change
    change_table :messages do |t|
      t.belongs_to :chat, foreign_key: true, index: true
    end
  end
end
