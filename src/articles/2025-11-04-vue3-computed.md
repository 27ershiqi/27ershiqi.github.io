---
title: "Vue 3 Computed 计算属性"
date: "2025-11-04"
tags: ["Vue", "前端", "技术"]
summary: "今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。"
---

# Vue 3 学习笔记

## computed 属性

今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。

### 基本用法

在 Vue 3 中，我们可以使用 `computed` 函数来定义计算属性。`computed` 函数接受一个函数作为参数，这个函数的返回值就是计算属性的值。例如：

```javascript
import { ref, computed } from 'vue'

const count = ref(0)

const doubleCount = computed(() => {
  return count.value * 2
})
```

在上面的例子中，我们定义了一个计算属性 `doubleCount`，它依赖于 `count` 属性。当 `count` 属性的值发生变化时，`doubleCount` 属性的值也会自动更新。

### 依赖追踪

计算属性会自动追踪其依赖的数据，当依赖的数据发生变化时，计算属性会重新计算。例如：

```javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => {
  return count.value * 2
})

console.log(doubleCount.value) // 0

count.value = 1

console.log(doubleCount.value) // 2
```

在上面的例子中，我们定义了一个计算属性 `doubleCount`，它依赖于 `count` 属性。当 `count` 属性的值从 0 变为 1 时，`doubleCount` 属性的值也会从 0 变为 2。

### 性能优化

计算属性会自动缓存其结果，只有当依赖的数据发生变化时，计算属性才会重新计算。这意味着计算属性的性能比普通的函数要好，因为它避免了不必要的计算。例如：

```javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => {
  return count.value * 2
})

console.log(doubleCount.value) // 0

count.value = 1

console.log(doubleCount.value) // 2

count.value = 2

console.log(doubleCount.value) // 4
```

### 总结

今天我们学习了 Vue 3 中的 computed 属性，它可以帮助我们定义一些计算属性，这些属性会根据依赖的数据自动更新。computed 属性的性能比普通的函数要好，因为它会自动缓存其结果。希望这篇文章对你有所帮助！
