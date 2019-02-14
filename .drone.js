module.exports = [
  {
    kind: 'pipeline',
    name: 'default',
    steps: [
      {
        name: 'echo',
        image: 'alpine',
        commands: [
          'echo "hello world"'
        ]
      }
    ]
  }
];
