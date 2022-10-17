
# Part 2 A Little More of a Challenge

1. The console log will output 3 because it uses the last value set to i from the for loop. Since var can be used in a function scope, the value can be accessed throughout the whole function.
2. The console log will output 150 because it obtains the last value set to discountedPrice from the for loop. Like the previous question, since it is a var, it can be accessed throughout the whole function.
3. The console log will output 150 because it obtains the last value set to finalPrice from the for loop. Once again, since it is a var, it can be accessed throughout the whole function.
4. This function returns an array that holds the discounted version of the prices it is given. For this snippet of code, it applies a 50% discount to each price, so it would return the var array [50, 100, 150]. Since var can be accessed throughout the whole function due to its function scope, it is returned as intended.
5. There is a reference error because i is being accessed outside of its specified block scope. Since i was defined in the for loop, it can only be accessed within that block.
6. There is a reference error because discountedPrice is being accessed outside of its specified block scope. Since discountedPrice was defined within the for loop, it can only be accessed within that block.
7. The console log will output 150 because it obtains the last value set to finalPrice from the for loop. Since the initialization of the let finalPrice variable and the console log statement were in the same block scope, the console log was able to successfully access the let variable finalPrice.
8. This function returns an array that holds the discounted version of the prices it is given. For this snippet of code, it applies a 50% discount to each price, so it would return the let array [50, 100, 150]. Since the initialization of the let discounted variable and the return statement share the same block scope, the discounted array will return successfully and as intended.
9. There is a reference error because i is being accessed outside of its specified block scope. Since i was defined in the for loop, it can only be accessed within that block.
10. The console log will output 3 because it was initialized, within the same block scope, as the length of the prices, which is 3.
11. This function returns an array that holds the discounted version of the prices it is given. For this snippet of code, it applies a 50% discount to each price, so it would return the const array [50, 100, 150]. During each run in the for loop, a new const discountedPrice variable is made each time containing the discounted price which is pushed into the const array. Pushing into a const variable is fine because you are not reassigning the variable to something else.
12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting();
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0];
13. 
    A. '32' - when adding a string to an integer, javascript makes the integer a string and then concatenates them.
    B. 1 - when subtracting an integer from a string, the string is converted into an integer and then subtraction occurs between the two integers.
    C. 3 - when adding an integer and null, null is mapped to the value 0 and then the operation begins (3+0 = 3)
    D. '3null' - when adding a string to another element, javascript makes the other element a string and then concatenates it with the first.
    E. 4 - true is mapped to the value 1, so the addition becomes 1 + 3 = 4.
    F. 0 - both false and null are mapped to the value 0, where the addition becomes 0 + 0 = 0.
    G. '3undefined' when adding an integer to another element, javascript makes the other element a string and then concatenates it with the first.
    H. NaN - when subtracting, the string is converted into an integer and, in the case of undefined, it is mapped to NaN; therefore the subtraction becomes 3 - NaN = NaN.
14. 
    A. true - the string becomes a number in this case, where 2 is greater than 1.
    B. false - checks the char of each and since "2" is greater than "1", the statement is false.
    C. true - the string becomes a number in this case, where 2 does equal 2.
    D. false - the strict equals also checks for type equality in addition to normal equality; since one is a string and the other is an int, the statement is false.
    E. false - the value of true is mapped to 1, which does not equal the int 2.
    F. true - any value except 0, "", NaN, undefined, and null for Boolean maps to true and since both types are of Boolean and are true, the statement is true.
15. The double equals checks/compares only the values themselves among the variables, while the triple equals checks both the value equality and the type equality.
16. Please reference "part2-question16.js".
17. The result of this function would be the array [2,4,6]. Following the function, you loop 3 times (since the array length is 3), in each loop you push to the array the return value of the function doSomething (this function is ran each loop and takes each element of the input array as a parameter), which simply multiplies the number by two and goes back to the for loop to run the next iteration. After the loop is finished, the newArr will contain [2,4,6], which is then returned.
18. Please reference "part2-question18.js".
19. It prints 1 then 4 then 3 then 2. Since 1 was called first without any timeouts, it is printed. 2 is not printed out right away because it needs to wait one second. 3 is also not printed out since it has a timeout. 4 is printed out next as it as no timeout. Next since 3 had a 0ms timeout, it is printed next. Lastly, since 2 had a 1000ms timeout it is printed out last.