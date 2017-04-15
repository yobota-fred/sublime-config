class Hello:
    """Remember to include docs"""
    def __init__(self, arg):
        self.arg = arg
        

class Goodbye:
    some_attr = False

    def scope(self):
        return "this is a method"

    def nest_scope(self):
        for thing in range(10):
            for another in "string":
                yield another, thing
            print(thing)
            yield thing + 1

        for another in "string":
            print("hello")
            yield "char is: {}".format(another)


def flip(func):
    def wrapped(*args, **kwargs):
        return func(reversed(args), **kwargs)

    return wrapped
