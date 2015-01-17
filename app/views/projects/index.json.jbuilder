
json.array! @projects do |p|
  json.merge! p.attributes
end
