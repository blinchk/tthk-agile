<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title> Coding Interview Questions</v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >1. How do you reverse a given string in place without using a
                loop only?</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func reverse(str []byte) []byte {
    if len(str) &lt;= 1 {
        return str
    }
    return append(reverse(str[1:]), str[0])
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >2. How do you check if a given string is a palindrome? (e.g.
                “Taco cat”)</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func palindromeFormat(str string) string {
	return strings.ToLower(strings.ReplaceAll("Taco cat", " ", ""))
}

func checkPalindrome(str1 []byte) bool {
	if bytes.Equal(reverse(str1), str1) {
		return true
	}
	return false
}

func task2() {
	str := []byte(palindromeFormat("Taco cat"))
	if checkPalindrome(str) {
		fmt.Println("Yes, it's polyndrome!")
	} else {
		fmt.Println("No, it isn't polyndorme!")
	}
	return
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >2. Write a program to display the multiplication table of a given
                integer.</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func multiplicationTable(num int) string {
	var str string
	for i := 1; i &lt;= 10; i++ {
		if i == 1 {
			str += strconv.Itoa(num) + " * " + strconv.Itoa(i) + " = " + strconv.Itoa(num*i) + "\n"
		} else {
			str += " " + " * " + strconv.Itoa(i) + " = " + strconv.Itoa(num*i) + "\n"
		}
	}
	return str
}

func task3() {
	fmt.Println(multiplicationTable(5))
	return
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >4. Write a program to find the maximum and minimum element in an
                array.</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func findMinMax(arr *[]int) {
	var maxPos, max, min, minPos int
	for v, i := range *arr {
		if i &gt; max {
			max = i
			maxPos = v
			min = max
		}
		if i &lt; min {
			min = i
			minPos = v
		}
	}
	fmt.Printf("Maximum element: %d at position %d\n", max, maxPos)
	fmt.Printf("Minimum element: %d at position %d\n", min, minPos)
}

func task4() {
	var arr = []int{12, 164, 13, 17, 18, 22, 16, 32, 64, 128, 6, 3, 1, 2, 4, 8}
	findMinMax(&arr)
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >5. Write a program to find the largest of three given numbers.
                (e.g. 8, 6, 10 → 10)</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func largestElement(arr [3]int) int {
	if arr[0] &gt; arr[1] && arr[0] &gt; arr[2] {
		return arr[0]
	} else if arr[1] &gt; arr[0] && arr[1] &gt; arr[2] {
		return arr[1]
	} else {
		return arr[2]
	}
}

func task5() {
	var arr = [3]int {3, 12, 4}
	fmt.Println("Largest element from ", arr, " is ", largestElement(arr))
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >6. Write a program to calculate the sum of elements in an array.
                (e.g. 1234 → 1 + 2 + 3 + 4 → 10)</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func sumOfElements(num int) int {
	var sum int
	for _, i := range strconv.Itoa(num) {
		sum += int(i - '0')
	}
	return sum
}

func task6() {
	num := 1234
	fmt.Println(sumOfElements(num))
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >7. Write a program to output a pyramid-like pattern with an
                asterisk.</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func asteriskPyramid(num int) string {
	var str string
	for i := 1; i &lg;= num; i++ {
		var asterisks int
		for spaces := 1; spaces &lg;= num-i; spaces++ {
			fmt.Print("  ")
		}
		for {
			fmt.Print("* ")
			asterisks++
			if asterisks == 2*i-1 {
				break
			}
		}
		fmt.Println("")
	}
	return str
}

func task7() {
	fmt.Println(asteriskPyramid(3))
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
              >8. Write a program to check if a given number is odd or even.
                Return “odd” if the number is odd, or “even” if the number is
                even</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code-highlight class="language-go">
              <pre>
func isOdd(num int) bool {
	if num % 2 == 0 {
		return true
	}
	return false
}

func task8() {
	fmt.Println("3 is odd?", isOdd(3))
	fmt.Println("4 is odd?", isOdd(4))
	fmt.Println("7 is odd?", isOdd(7))
	fmt.Println("12 is odd?", isOdd(12))
}</pre
              >
              </code-highlight>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card-actions>
          <v-btn block color="primary" href="https://gist.github.com/blinchk/a9735e7e763295af899ebd594730a515" text>
            <v-icon left>mdi-github</v-icon>
            Whole Gist File
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism.css";
import "vue-code-highlight/themes/window.css";

export default {
  data() {
    return {};
  },
  components: {
    CodeHighlight
  }
};
</script>

<style></style>
