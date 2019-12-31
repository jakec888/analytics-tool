class CreateAnalytics < ActiveRecord::Migration[6.0]
  def change
    create_table :analytics do |t|
      t.integer :clicks
      t.string :date

      t.belongs_to :link, index: true

      t.timestamps
    end
  end
end
