# File use for each live session

## INTRODUCTION

# - Ruby was created in 1993, by a Japanese person, Matz
# - Ruby was created for developer happiness
# - Rails is the most popular Ruby Frameworks
# Airbnb, GitHub, Shopify, Twitch are all applications built in Rails

## Today, we are going to cover TWO core programming notions

# Data Types, Variables

## DATA TYPES

# String
"Maxwel" # String
'Okoth' # String

# Integer
5
1
0
-2

# Float
4.21
-30.4

# Boolean (strictly speaking, it is NOT a data type in Ruby)
# True class (class is a synonym data type)
true

# False class
false

# Array
[] # Empty array

[1, 2, 3] # Array of 3 integers

['Max', 'Phil', 'Bill', 'James'] # An array of 3 strings

[4.21, false, 'Max']

# puts
# Puts goes to the next line
# puts 'Max'

# # prints doesn't go to the next line
# # print
# print 'Hi, my name is'
# puts ' Max'

# p
# only used for debugging
p [1, 2, 3]
puts [1, 2, 3]

# p is a shortcut for:
puts [1, 2, 3].inspect

# In Ruby, everything is an object - we can call methods on these objects

# Most basic method we can call is class: .class
# .class lets us check the data type of a given object
puts 'Max'.class # string
puts 5.class # Integer
puts [1, 2, 3].class # Array
puts ''.class # Empty string
puts [].class # Empty array
puts [1, 4.3, 'Max'].class # Array 

### String Methods
# basic string methods
puts 'Max'.capitalize
puts 'Max'.downcase
puts 'Max'.length
puts 'max'.reverse

# advanced string methods
p 'Max'.chars
puts 'Max'.chars
puts '7'.to_i
puts '7'.to_i.class


# In Ruby we can chain methods
# Make sure you call the right method on the right object

#### Integer Methods
# Basic methods
puts 3 + 2
puts 5 - 2
puts 7 * 2
puts 5 / 2 # returns the quotient of the euclidian division
puts 5.0 / 2 # to get the exact result, one side needs to be a float

# Advanced methods

puts 5.to_s # returns a a String
puts 5.to_f # returns a a Float
puts 5.to_odd? # returns true or false
puts 4.to_even?  # returns true or false

# concatenation
puts 'Maxwel ' + 'Okoth'

#### VARIABLES ####

age = 23
# I am storing 23 in a box called age
# I am assigning the Integer 23 to the variable called age
# the equal sign is the assignment operator

# Two conventions for variables
# 1) variables are written in lower_snake_case
first_name # OK
First_Name # NO NO

# 2) Please, pretty please, use explicit names for your variables
age = 23 # OK
n = 23 # not OK

first_name = 'Max' # OK
f_n = 'Max' # Not OK

age = 23

# .class
puts age.class

puts age
puts age + 1

# Re-assign

age = 'twenty three'
puts age

# Ruby doesn't care about previous types
# It is a dynamic language

age = 24
puts age 
age = age + 1

puts age

# Equilvalent to:
age += 1
puts age

# This is called incrementation

# a variable is lower_snake_case
# a constant is ALLCAPS
# a class is CamelCase

# Let's write a short program that asks a user for their name and age, greet them, and tell them how old they will be next year

# Let's write some pseudo-code
# 0 - Welcome the user: OK
puts 'Welcome to our first livecode!'
puts ''
puts '================='
# 1 - Ask user for their name: OK
puts 'What is your name?' # Stored as a string
# 2 - Get user inputs and store user answer in a variable
first_name = gets.chomp
# 3 - Ask user how old they are
puts 'How old are you?'# String
# 4 - Store user answer in another variable
user_age = gets.chomp.to_i
# 5 - Compute user's age next year
age_next_year = user_age + 1
# puts age_next_year
# 6 - Return last sentence with the age next year
puts 'Hello ' first_name + '! Next year, you will be... ' + age_next_year.to_s + ' !'

# Better way lets use string interpolation
# Interpolation lets us INJECT Ruby code directly inside a String
# Interpolation only works with double quotes
puts "Hello #(first_name)! Next year you will be #(age_next_year)!"
# puts "Hello #(first_name)! Next year you will be #(user_age + 1)!"

