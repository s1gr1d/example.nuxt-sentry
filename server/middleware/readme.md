The `server/middleware` folder was making problems in combination with the `.git` folder (don't know why).
The build output did not look right as it was not only using the dynamic `import()` but also an `import` of the server file chunk. 

This could be reproduced multiple times (also when generating a new git folder with `git init` and adding a new remote repository).
However, it currently seems to work again for any reason that cannot be explained.

Should this issue occurring again, try deleting the `server/middleware` content.