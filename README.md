### GithubExplorer for React Native

This is a version of the GithubExplorer project written in React Native.

#### iOS Version
![alt text](https://github.com/jdayCBRE/GithubExplorer_ReactNative/blob/master/media/GithubExplorer_RN_iOS.gif)

#### Android Version
Hopefully coming soon 😬, I have some strange errors I can't figure out how to resolve just to launch the app.

#### Pros
- iOS and Android apps developed at the same time
- Live reloading is nice to quickly iterate design changes
- Redux can store the entire state of the app over time*

#### Cons
- Javascript. Flow helps, but feels clunky and adds boilerplate code.
- App architecture and readability are not great.
- Lack of common IDE functionality like code autocompletion is especially hard with strange JS & React syntax
- Debugging tools are difficult to use and lack basic features that native has
- Environment breaks often with unclear error messages. Sometimes restarting all the processes gets it working again without making any changes.

#### Development
|   |  |
| ------------- | ------------- |
| __Time to build__ | 1 week, with 2 weeks of tutorials & learning first |
| __Experience Level__ | No prior ReactNative or React experience, very little Javascript experience. |
| __External Dependencies__ | Literally hundreds. React Native itself is an external dependency. |
| __Learning Curve__ | Very high. There is code I wrote that just works and I'm still struggling to understand how. |

*This was built without using Redux, as it would have been a huge hammer for a small nail in this small example app. Local state was sufficient for this app's needs. I also find myself questioning a global app state when the best mobile architectures I've worked in are modular and have independent features.
