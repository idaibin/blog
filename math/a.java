public class a {

    /**
     * @Description: 使用状态转移方程，计算两个字符串之间的编辑距离
     * @param a-第一个字符串，b-第二个字符串
     * @return int-两者之间的编辑距离
     */
    public static int getStrDistance(String a, String b) {
        if (a == null || b == null) {
            return -1;
        }

        // 初始用于记录化状态转移的二维表
        int[][] d = new int[a.length() + 1][b.length() + 1];
        System.out.println(d);

        // 如果i为0，且j大于等于0，那么d[i, j]为j
        for (int j = 0; j <= b.length(); j++) {
            d[0][j] = j;
        }

        // 如果i大于等于0，且j为0，那么d[i, j]为i
        for (int i = 0; i <= a.length(); i++) {
            d[i][0] = i;
        }
        System.out.println(d);
        return d[a.length()][b.length()];
    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        // System.out.println(Lesson10_1.getStrDistance("mouse", "mouuse"));
        a.getStrDistance("mouse", "mouuse");
    }
}
