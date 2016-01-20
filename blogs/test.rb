

#Making empty arrays and hashes

=begin

array1 = Array.new
hash1 = Hash.new

array2 = []
hash2 = {}

#Making nonempty arrays and hashes

array1 = [1,"two",3.0]
hash1 = { "Sydney" => "Icecream", "Ryan" => "Cake"}
hash1_symbols = { :Sydney => "Icecream", :Ryan => "Cake"}
hash1_symbols_again = { Sydney: "Icecream", Ryan: "Cake"}

array2 = Array.new(3,"this object will appear in each of 3 spots in the array")

array3[0] = "object at index 0"
hash3["Sydney"] = "Icecream"



#Map dog class

class Dog

	def initialize (name,hungry=true)
		@name = name
		@hunger = hungry
	end

	def bark
		puts "#{@name} barks at you!"
	end

	def feed(cupsoffood)
		if cupsoffood < 2
			puts "#{@name} is still hungry! Trying feeding #{@name} more than 2 cups!"
			puts "How many cups would you like to feed Nuni now?"
			feed(gets.chomp.to_i)
		else
			@hungry = true
			puts "#{@name} is no longer hungry!"
		end
	end

end

Kristy = Dog.new("Kristy")
Nuni = Dog.new("Nuni")
Keno = Dog.new("Keno")

Nuni.bark
Keno.bark

Kristy.feed(4)
Keno.feed(5)
Nuni.feed(1)

=end

# Access each item in an array

=begin

fav_foods = ["fried chicken",
	"birthday cake",
	"turkey meatballs",
	"garlic spinach"]


fav_foods.each do |food|
	print "#{food.capitalize} is one of my favorite foods! "
end

fav_foods.each.with_index do |food, index|
	if index % 2 == 0
		print "#{food.capitalize} is an even food! "
	else
		print "#{food.capitalize} is an odd food! "
	end
end


short_foods = fav_foods.select do |food|
	food.size < 15
end

p short_foods

fav_foods.map! do |food|
	print "#{food.capitalize}-flavored potato chips! "
end

fav_foods

fav_foods = {
	"fried chicken" => 1500,
	"birthday cake" => 1000,
	"turkey meatballs" => 500,
	"garlic spinach" => 100,
}

fav_foods.each do |key, value|
	print "#{key.capitalize} is #{value} calories! "
end

=end


