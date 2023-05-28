# Lab 8 - Starter

(1) 

I would select "2. Manually run them locally before pushing code". The reason I select this option is I want to make sure the code I push to github is validated. If there is some problem with Github action, the code I push to my repository may not be tested. I want to test my code each time I push my work to my repository so that I can find bugs and potential design flaws easily and fast.

(2)

No. If I want to check if a function returns the correct output, I will choose unit testing.

(3)

No. I think I will choose E2E Testing in this case because "message" feature doesn't modify the text. Therefore it is also easy to test the correctness of output using E2E testing. It is more important to test whether the text is correctly written and sent to the correct user. E2E Testing will be a better choice in this case.

(4)

Yes. The reason I choose unit testing is we want to know whether the output of this feature is correct under all possible text length, and this feature is independent from how other features work, it just depends on the input message length. Therefore, I think unit testing will be a better choice.