class NextstopSerializer < ActiveModel::Serializer
  attributes :id, :name, :budget, :img_url, :like, :dislike
end
