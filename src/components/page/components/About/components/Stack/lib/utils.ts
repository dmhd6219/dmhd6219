const colors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-indigo-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-orange-400',
    'bg-cyan-400',
    'bg-rose-400',
    'bg-fuchsia-400',
    'bg-violet-400',
    'bg-emerald-400',
    'bg-teal-400',
];

export function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
