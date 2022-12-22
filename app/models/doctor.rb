class Doctor < ApplicationRecord
  # Associations Here

  validates :first_name, :last_name, :speciality, presence: true
end
