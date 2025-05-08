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
