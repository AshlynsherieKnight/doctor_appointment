class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :appt_subject
      t.string :appt_notes
      t.string :appt_time
      t.belongs_to :patient, null: false, foreign_key: true
      t.belongs_to :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end