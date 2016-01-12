

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

=end

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



