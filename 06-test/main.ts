import { assert, assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";

Deno.test({
    name: "testing example",
    fn(): void {
        assertEquals("world", "world");
        assertEquals({ hello: "world" }, { hello: "world" });
    },
});

Deno.test('the whole truth', () => {
    assert(1 === 1);
});