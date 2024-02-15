Debouncing:
Debouncing is a programming technique used to delay the execution of a function until a certain amount of time has passed since the last time it was called. This can be useful for preventing unnecessary function calls, which can improve performance.
debouncing is often used to handle events such as keystrokes or mouse movements. For example, if you have a search bar on your website, you might want to debounce the search function so that it is only called after the user has finished typing.
This will prevent the search function from being called multiple times for each keystroke, which can improve performance and prevent unnecessary network requests.

typing slow = difference btwn key strokes - 200ms
typing fast = 30ms

Performance:
-iphone pro max = 14 letters _ 1000 students making api calls = 14000
-with debouncing = 3 API _ 1000 students = 3000

Debouncing with 200ms

- if difference between 2 key stokes is <200ms - DECLINE API CALL
  - > 200ms make an API CALL

key - i
-render the component
-useEffect()
-start the timer => make api call after 200ms

key- ip
-render the component
-useEffect()
-start the timer -> make api call after 200ms

cache:
time complexity to search in array = O(n)
time complexity to search in array = O(1)

array.indexOf()

{
i:
ip:
iph:
}

new Map()

-n level nesting
