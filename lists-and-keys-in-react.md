# Lists and Keys in React

```JavaScript
const numbers = [1,2,3,4,5]
const listItems = numbers.map((number) =>
  <li>{number}</li>                             
)
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
)
```

> When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements. 

运行这段代码时浏览器会抛出一个警告，告诉你需要给list item提供一个key。简单来说，数组内的每个组件元素都要包含一个特殊的字符型属性

But why?

> Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

> The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys

> We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

Avoid to use index as key.

[Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

> If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

>  **Keys Must Only Be Unique Among Siblings**

> Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name

1. the list and items are static(they are not computed and do not change)

2. the items in the list have no ids;

3. the list is never reordered or filtered

   When all of them are met, you **may safely use the index as a key**.





