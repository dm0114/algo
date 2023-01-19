// 백준 입력 참고
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ");
    console.log(Array.from(Array(+b), () => '*'.repeat(a)).join('\n'));
});
