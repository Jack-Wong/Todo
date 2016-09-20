class ToDo < ActiveRecord::Base
  has_many(
    :steps,
    :class_name => "Step",
    :foreign_key => :to_do_id,
    :primary_key => :id
  )
end
