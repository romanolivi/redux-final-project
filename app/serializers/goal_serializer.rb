class GoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price
  belongs_to :user
end
