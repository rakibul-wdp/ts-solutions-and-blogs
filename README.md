# What are some differences between interfaces and types in TypeScript?

### Interface

Interface is look like object or shape of an object. Most of the time it's used to declare object types and class.

### Type

Type is so flexible for define types. With Type not only for object type declare but also for intersection, tuples, etc.

### Here is some differences between interfaces and types.

- With interfaces, it can be extended with `extends` keyword. In types have `&` (intersection) for similar thing like extend.

- As I already said, with type alias we can do unions, intersections, tuples, etc. But this all of thing can't do with interface.

- Interface declare with interface keyword and with object syntax. But type declare with equal sign.

So, for all of primitive, we can use type alias and object we can use both. I recommend to use type alias for array and function all of the time, and for object use both

# Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

### any

When I think about typescript any type, I remember my first internship, where I have to work with typescript project. This time I don't have much knowledge with typescript, so instead of proper type declare I just keep any everywhere. My senior developer after seeing this, told me you don't using typescript, if you use any everywhere, then there is no reason is to use typescript. So, that's the thing like any just disables type checking. When we completely don't know about data type (data coming from unknown source) this time we can use it. But if we know the data type, we should always use proper type.

### unknown

It's means, we don't know about data type, don't know means like function argument (sometime we don't know the argument data type). But we can know it in runtime. So, by `typeof` keyword we can detect the data type and work according to the data type we got in runtime. So, we can use it, when we are not aware of data type.

### never

If we completely sure that function will not return anything or functions that never return, this time we can use never.

So, in a summary, `any` and `unknown` type accepts anything. `any` can use directly but safe to use `unknown` and `never`.
