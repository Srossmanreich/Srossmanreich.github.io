

def fibonacci(number)
	if number == 0 || number == 1
		return number
	else
		(fibonacci(number - 1) + fibonacci(number - 2))
	end
end

puts fibonacci(0)
puts fibonacci(1)
puts fibonacci(2)
puts fibonacci(3)
puts fibonacci(4)
puts fibonacci(5)
puts fibonacci(6)
puts fibonacci(7)
puts fibonacci(8)
puts fibonacci(9)

								