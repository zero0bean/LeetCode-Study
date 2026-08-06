class Solution {
    public int smallestNumber(int n, int t) {
        int out = -1;
        for (int i = n; i <= 100; i++) {
            String stringN = String.valueOf(i);
            char[] charArray = stringN.toCharArray();
            int product = 1;
            for (char c: charArray) {
                
                int num = Integer.parseInt(String.valueOf(c));
                product *= num;
            }

            if (product % t == 0) {
                out =  i;
                break;
            }
        }
        return out;
    }
}