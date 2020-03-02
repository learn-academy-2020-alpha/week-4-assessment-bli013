# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.
fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

#  I cant get the number 199 to show up when printing for odds, ive tried researching and nothing.
def odd_values(arr)
    arr.select.with_index { |_, i| i.odd? }
end

p odd_values(fullArr1)
p odd_values(fullArr2)


# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike
    def initialize(model,frame_size)
        @model = model
        @frame_size = frame_size
        @wheels = 2
        @bell = "not ringing"
        @speed = 0
    end
    def get_info
        "Model #@model, Frame size #@frame_size, Wheels #@wheels, Bell #@bell, Speed at #@speed mph."
    end
    def bell
        if @bell == "not ringing"
            @bell = "Ring!"
        elsif @bell == "Ring!"
            @bell = "not ringing"
        end
    end
    def speed_up
        @speed = 5 + @speed
    end
    def speed_down
        @speed = @speed - 3
    end

end
my_bike = Bike.new("Super","big")
p my_bike.get_info
my_bike.bell
p my_bike.get_info
my_bike.speed_up
my_bike.speed_up
my_bike.speed_down
p my_bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.





# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.





# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.





# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
