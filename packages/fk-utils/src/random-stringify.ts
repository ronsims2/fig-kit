/**
 * This function will create a random sequence of cat, dog, mouse that matches the count.
 * @param count
 */
export function randomStringify(count: number = 1): string {
  const animals = ['dog', 'cat', 'mouse']
  return Array(count)
    .fill('')
    .map(() => {
      return animals[Math.floor(Math.random() * animals.length)]
    })
    .join('-')
}
