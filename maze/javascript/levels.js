/**
 * To crate to new level, create a new object with a propriety title and a propriety map in which you will write one line per element.
 * each character is a case :
 *      - x: wall,
 *      - o: empty case,
 *      - F: fox,
 *      - H: house
 */

const levels = [
    {
        title: 'Base level',
        map: [
            'xxxxHxxx',
            'xxoooxxx',
            'xxoxxxxx',
            'xxooooox',
            'xxxxxxoo',
            'xxxxxxxo',
            'xxxxxxxo',
            'xFoooooo',
        ],
    },
    {
        title: '10x10',
        map: [
            'xxxoooHxxx',
            'xxxxoxxxxx',
            'xxxxoxxxxx',
            'xxxxoxxxxx',
            'xooooxxxxx',
            'xoxxxxxxxx',
            'xoxxxxxxxx',
            'xoxxxxxxxx',
            'xoxxxxxxxx',
            'xFxxxxxxxx',
        ],
    },
    {
        title: '50x50',
        map: [
            'xxxxxxxxxxxxxxxxxxxxxxxoooHxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxooooxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxFxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        ],
    },
    {
        title: 'Snail',
        map: [
            'Fooooooooo',
            'xxxxxxxxxo',
            'ooooooooxo',
            'oxxxxxxoxo',
            'oxooooxoxo',
            'oxoxxHxoxo',
            'oxoxxxxoxo',
            'oxooooooxo',
            'oxxxxxxxxo',
            'oooooooooo',
        ],
    }
];