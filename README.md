# Last Air Bender using Tailwind

Project Stage 1

1 - Create Vite App
npm create vite@latest PROJECTNAME -- --template react

2 - Page will have - Title - Responsive container with small cards - Each card will have a photo and a name

3 - Fetch from API - API Documentation: https://last-airbender-api.fly.dev - Use random characters endpoint, and limit it to around 20

4 - Store response data from API on state - Store: "\_id", "photoUrl", & "name"

5 - The API should be called only once when the page loads. It should not be called on a rerender.

6 - It should have a at least 2 components, 1 of them being the small card

7 - Should only use Functional Components

8 - Should use hooks: useEffect & useState

Bonus:
9 - Sometimes a character has no "photoURL", what should you do in those cases so it doesn't display a broken image?

---

## Non-AI MIT License

MIT NON-AI License

Copyright (c) 2023, Emily Brockett

Permission is hereby granted, free of charge, to any person obtaining a copy of the software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

In addition, the following restrictions apply:

1. The Software and any modifications made to it may not be used for the purpose of training or improving machine learning algorithms,
   including but not limited to artificial intelligence, natural language processing, or data mining. This condition applies to any derivatives,
   modifications, or updates based on the Software code. Any usage of the Software in an AI-training dataset is considered a breach of this License.

2. The Software may not be included in any dataset used for training or improving machine learning algorithms,
   including but not limited to artificial intelligence, natural language processing, or data mining.

3. Any person or organization found to be in violation of these restrictions will be subject to legal action and may be held liable
   for any damages resulting from such use.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
