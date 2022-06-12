Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

function wordBreak(s, wordDict) {
    const len = s.length;
    const memoization_array_words = new Array(len).fill(null);
    const memoization_array_scores = new Array(len).fill(0);

    const wordScores = {};
    wordDict.forEach(function(word) {
        wordScores[word] = 1
    });

    automata = new AhoCorasick(wordDict);
    results = automata.search(s);

    results.forEach(function(result) {
        // result[0] contains the end position
        // result[1] contains the list of words ending in that position
        const end_pos = result[0];
        result[1].forEach(function(word) {
            const prev_end_pos = end_pos - word.length;
            const prev_score = (prev_end_pos == -1) ? 0 : memoization_array_scores[prev_end_pos];
            const score = prev_score + wordScores[word];
            if (score > memoization_array_scores[end_pos]) {
                memoization_array_words[end_pos] = word;
                memoization_array_scores[end_pos] = score;
            }
        });
    });

    if (memoization_array_words[len-1] == null) {
        return false;
    }
    solution = []
    var pos_to_keep = len - 1;
    while (pos_to_keep >= 0) {
        const word = memoization_array_words[pos_to_keep];
        solution.push(word);
        pos_to_keep -= word.length;
    }
    return solution.reverse()
}