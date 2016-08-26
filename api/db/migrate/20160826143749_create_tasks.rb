class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.date :due_on
      t.string :assignee

      t.timestamps
    end
  end
end
