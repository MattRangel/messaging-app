class CreateMessages < ActiveRecord::Migration[7.2]
  def change
    create_table :messages do |t|
      t.string :text
      t.belongs_to :user, foreign_key: true, index: true

      t.timestamps
    end
  end
end
