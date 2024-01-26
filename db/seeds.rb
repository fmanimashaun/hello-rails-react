# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

greetings = [
  "Welcome to our amazing app!",
  "Howdy, partner! Let's get started.",
  "Bonjour! It's a pleasure to have you here.",
  "Hola! ¿Cómo estás?",
  "Greetings, earthling! "
]

greetings.each do |message|
  Greeting.create!(content: message)
end
