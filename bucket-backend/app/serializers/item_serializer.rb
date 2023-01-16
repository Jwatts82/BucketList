class ItemSerializer < ActiveModel::Serializer
  attributes :id, :description, :name
  belongs_to :list
end
