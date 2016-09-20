class Step < ActiveRecord::Base
  belongs_to(
    :todo,
    :class_name => "ToDo",
    :foreign_key => :to_do_id,
    :primary_key => :id
  )
end
