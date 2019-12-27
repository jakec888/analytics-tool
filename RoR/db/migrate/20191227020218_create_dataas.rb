class CreateDataas < ActiveRecord::Migration[6.0]
  def change
    create_table :dataas do |t|
      t.string :date
      t.integer :clicks
      
      t.belongs_to :link, index: true

      t.timestamps
    end
  end
end
