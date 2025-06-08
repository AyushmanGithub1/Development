import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';

// MOCK API → Partial Mock (Come after last ones)
//1- importActual since other things are coming from same file too so caching na hojjae
//2- fetchUser mock hogya api ka ab
vi.mock('./user-utils.js', async () => {
    const actual = await vi.importActual('./user-utils.js');
    return {
        ...actual,
        fetchUser: vi.fn().mockResolvedValue({ name: 'Ayushman Tiwari' })
    };
});

test('mock function basics',()=>{
    const mockFn = vi.fn();

    mockFn('Hello')
    mockFn('World')

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('World');//This is case sensitive
    expect(mockFn).toHaveBeenCalledTimes(2);
})

import { getFullName, isAdult, getFriendsCount, fetchUser } from './user-utils.js';
import * as userUtils from './user-utils.js';

describe('user-utils',()=>{
    test('getFullName',()=>{
        const user = {firstName: 'John', lastName: 'Doe'};
        expect(getFullName(user)).toBe('John Doe');
    })
    test('isAdult',()=>{
        expect(isAdult(12)).toBeFalsy();
    })
    test('getFriendsCount',()=>{
        const friends = ['Ayushman','Shivansh'];
        expect(getFriendsCount(friends)).toBe(2);
    })
});

//When using other function

test('mocking an async api call',async()=>{
    const result = await fetchUser();
    expect(result.name).toBe('Ayushman Tiwari');//Since objects are not comparable therefore .name dia
});
//we saw vi.fn() to create function, vi.mock to mock a function by other component and vi.mockResolvedValue - to give a resolved value, always return in second variable in mock

//vi.mock() is hoisted so sbse pehle chalao coz api calls sbse pehle chalni chaiye wrna unexpectancy can happen

//importActual is partial mock

//Spy
//It watches an existing real function, You can test whether it has been called and with what arguments
// Mock: replaces the function with a fake one.

// Spy: wraps the real function, lets you test calls, optionally mock behavior.

const utils = {
    greet(name){
        console.log(`hello, ${name}`)
    }
}
test('spy on greet',()=>{
    const spy = vi.spyOn(utils,'greet');
    utils.greet('Ayushman');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Ayushman');
    spy.mockRestore(); // optional - restore original function
})


//beforeEach and afterEach

//setup before each test
describe('counter tests', () => {
    let counter = 0;
    beforeEach(() => {
        counter = 0;
    });

    afterEach(() => {
        // example: cleanup
        console.log('After test');
    });

    test('increments counter', () => {
        counter += 1;
        expect(counter).toBe(1);
    });

    test('increments counter twice', () => {
        counter += 2;
        expect(counter).toBe(2);
    });
});