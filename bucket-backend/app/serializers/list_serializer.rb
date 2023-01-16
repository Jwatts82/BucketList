class ListSerializer < ActiveModel::Serializer
  attributes :id, :description, :location, :completed
  has_many :items
end
