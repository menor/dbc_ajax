get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  value = params[:roll]
  dice1 = Roll.create(value: value)
  html = "#{dice1.value}.png"
  return html
    # value = params[:value] ? params[:value].to_i : nil

  # @roll = value ? Roll.create({ value: value }) : Roll.create

  # erb :index  # HINT: what does this do? what should we do instead?
end
