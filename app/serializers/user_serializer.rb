class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username :goals
  has_many :goals
end
