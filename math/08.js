/**
 * @Description:  使用函数的递归（嵌套）调用，找出所有可能的队伍组合
 * @param teams-目前还剩多少队伍没有参与组合，cTeam-保存当前已经组合的队伍
 * @return result - 可能的队伍组合
 */

function combine(teams, cTeam, count, result) {
    // 挑选完了m个元素，输出结果
    if (cTeam.length == count) {
        result.push(cTeam);
        return cTeam;
    }
    for (let i = 0; i < teams.length; i++) {
        // 从剩下的队伍中，选择一队，加入结果
        const newResult = cTeam.slice(0);
        newResult.push(teams[i]);
        // 只考虑当前选择之后的所有队伍
        const restTeams = teams.slice(i + 1);
        // 递归调用，对于剩余的队伍继续生成组合
        combine(restTeams, newResult, count, result);
    }
    return result;
}
combine(['t1', 't2', 't3'], [], 2, []);
