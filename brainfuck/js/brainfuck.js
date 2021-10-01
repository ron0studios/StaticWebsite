const runBtn = document.getElementById("run_button");
const stopBtn = document.getElementById("stop_button");
const minifyBtn = document.getElementById("minify_button");
const statusObj = document.getElementById("status");
const editor = document.getElementById("editor");
const inputArea = document.getElementById("input");
const outputConsole = document.getElementById("output");
const loadInput = document.getElementById("load_example");

const examples = {
    "beer.b": `[ 99 Bottles of Beer in Brainf*** by Eric Bock - ebock@uswest.net ]

+++++++++>+++++++++>>>++++++[<+++>-]+++++++++>+++++++++>>>>>>+++++++++++++[<+++
+++>-]>+++++++++++[<++++++++++>-]<+>>++++++++[<++++>-]>+++++++++++[<++++++++++>
-]<->>+++++++++++[<++++++++++>-]<+>>>+++++[<++++>-]<-[<++++++>-]>++++++++++[<++
++++++++>-]<+>>>+++++++[<+++++++>-]>>>++++++++[<++++>-]>++++++++[<++++>-]>+++++
++++++[<+++++++++>-]<->>++++++++[<++++>-]>+++++++++++[<++++++++++>-]<+>>+++++++
+[<++++>-]>>+++++++[<++++>-]<+[<++++>-]>++++++++[<++++>-]>>+++++++[<++++>-]<+[<
++++>-]>>++++++++++++[<+++++++++>-]++++++++++>>++++++++++[<++++++++++>-]<+>>+++
+++++++++[<+++++++++>-]>>++++++++++++[<+++++++++>-]>>++++++[<++++>-]<-[<+++++>-
]>++++++++++++[<++++++++>-]<+>>>>++++[<++++>-]<+[<+++++++>-]>++++++++[<++++>-]>
++++++++[<++++>-]>+++++++++++[<++++++++++>-]<+>>++++++++++[<++++++++++>-]<+>>>+
+++[<++++>-]<+[<++++++>-]>+++++++++++++[<++++++++>-]>++++++++[<++++>-]>>+++++++
[<++++>-]<+[<++++>-]>+++++++++++[<+++++++++>-]<->>++++++++[<++++>-]>++++++++++[
<++++++++++>-]<+>>+++++++++++[<++++++++++>-]>++++++++++[<++++++++++>-]<+>>+++++
++++++[<++++++++++>-]<+>>>+++++[<++++>-]<-[<++++++>-]>++++++++[<++++>-]>+++++++
+++>>>>++++++++++++[<+++++++>-]++++++++++>>++++++++++++[<++++++++>-]<+>>+++++++
+++[<++++++++++>-]>++++++++++++[<+++++++++>-]<->>+++++++++++[<++++++++++>-]>+++
+++++++[<++++++++++>-]<+>>+++++++++++++[<+++++++++>-]>++++++++[<++++>-]>+++++++
++++[<++++++++++>-]<+>>>>+++++[<++++>-]<-[<++++++>-]>+++++++++++[<++++++++++>-]
<+>>++++++++++++[<++++++++>-]<+>>+++++++++++[<++++++++++>-]>++++++++[<++++>-]>+
+++++++++[<++++++++++>-]<+>>>+++++++[<++++>-]<+[<++++>-]>>>+++++[<+++>-]<[<++++
+++>-]>>+++++[<+++>-]<[<+++++++>-]>++++++++[<++++>-]>>+++++++[<++++>-]<+[<++++>
-]>>++++++[<++++>-]<-[<+++++>-]>>>++++++[<++++>-]<-[<+++++>-]>++++++++[<++++>-]
>++++++++++++[<++++++++>-]<+>>++++++++++[<++++++++++>-]>>++++[<++++>-]<[<++++++
+>-]>+++++++++++[<++++++++++>-]<+>>++++++++[<++++>-]>>++++[<++++>-]<+[<+++++++>
-]>++++++++++[<++++++++++>-]>+++++++++++[<++++++++++>-]>+++++++++++[<++++++++++
>-]>++++++++[<++++>-]>++++++++++++[<++++++++>-]<+[<]<[<]<[<]<[<]<<<<[<]<[<]<[<]
<[<]<<<<[<]<<<<<<[>>[<<[>>>+>+<<<<-]>>>[<<<+>>>-]<[>+<-]>>-[>-<[-]]>+[<+>-]<<<]
>>[<<<<[-]>>>>>>>[>]>.>>>[.>>]>[>]>>[.>>]<[.<<]<[<]<<.>>>[.>>]>[>]>>[.>>]>.>>>[
.>>]>[>]>>[.>>]>>[.>>]<[.<<]<<<<[<]<[<]<[<]<[<]<<<<[<]>[.>]>>>>[.>>]>>[.>>]>>[.
>>]<[.<<]<[<]<<<<[<]<<-]<<<<[[-]>>>[<+>-]<<[>>+>+<<<-]>>>[<<<+>>>-]<[<<<+++++++
+[>++++++<-]>>>[-]]++++++++[<++++++>-]<<[.>.>]>[.>>]>>>[>]>>>>[.>>]>>[.>>]>>[.>
>]<[.<<]<[<]<<<<[<]<<<<<[.>.>]>[.>>]<<<[-]>[-]>>>>>[>]>>>>[.>>]>>[.>>]>>[.>>]>.
>>>[.>>]>>[.>>]>[>]>>[.>>]<[.<<]<<<<[<]<[<]<[<]<[<]<<<<[<]<<<<<<]<<[>+>+<<-]>>[
<<+>>-]<[>-<[-]]>+[<+>-]<[<++++++++++<->>-]<<[>>+>+>+<<<<-]>>[<<+>>-]<-[>+>+>>+
<<<<-]>[<+>-]>>>[<<[>>>+>+<<<<-]>>>[<<<+>>>-]<[>+<-]>>-[>-<[-]]>+[<+>-]<<<]>>[<
<<<[-]>>>>>>>[>]>.>>>[.>>]>[>]>>[.>>]<[.<<]<[<]<<<<[<]<<-]<<<<[[-]>>>[<+>-]<<[>
>+>+<<<-]>>>[<<<+>>>-]<[<<<++++++++[>++++++<-]>>>[-]]++++++++[<++++++>-]<<[.>.>
]>[.>>]<<<[-]>[-]>>>>>[>]>>>>[.>>]>>[.>>]>>[.>>]<[.<<]<[<]<<<<[<]<<<<<<]+++++++
+++.[-]<<<[>>+>+>+<<<<-]>>[<<+>>-]<[>+>+>>+<<<<-]>[<+>-]>]`,
    "helloworld.b": `++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++.>+.+++++++..+++.<<++.>+++++++++++++++.>.+++.------.--------.<<+.<.`,
    "mandlebrot.b": `      A mandelbrot set fractal viewer in brainf*** written by Erik Bosman
+++++++++++++[->++>>>+++++>++>+<<<<<<]>>>>>++++++>--->>>>>>>>>>+++++++++++++++[[
>>>>>>>>>]+[<<<<<<<<<]>>>>>>>>>-]+[>>>>>>>>[-]>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>[-]+
<<<<<<<+++++[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>>>>+>>>>>>>>>>>>>>>>>>>>>>>>>>
>+<<<<<<<<<<<<<<<<<[<<<<<<<<<]>>>[-]+[>>>>>>[>>>>>>>[-]>>]<<<<<<<<<[<<<<<<<<<]>>
>>>>>[-]+<<<<<<++++[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>>>+<<<<<<+++++++[-[->>>
>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>>>+<<<<<<<<<<<<<<<<[<<<<<<<<<]>>>[[-]>>>>>>[>>>>>
>>[-<<<<<<+>>>>>>]<<<<<<[->>>>>>+<<+<<<+<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>
[>>>>>>>>[-<<<<<<<+>>>>>>>]<<<<<<<[->>>>>>>+<<+<<<+<<]>>>>>>>>]<<<<<<<<<[<<<<<<<
<<]>>>>>>>[-<<<<<<<+>>>>>>>]<<<<<<<[->>>>>>>+<<+<<<<<]>>>>>>>>>+++++++++++++++[[
>>>>>>>>>]+>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+[
>+>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>[-<<<<+>>>>]<<<<[->>>>+<<<<<[->>[
-<<+>>]<<[->>+>>+<<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>>>>>>>>]<<<<<<<
<<[>[->>>>>>>>>+<<<<<<<<<]<<<<<<<<<<]>[->>>>>>>>>+<<<<<<<<<]<+>>>>>>>>]<<<<<<<<<
[>[-]<->>>>[-<<<<+>[<->-<<<<<<+>>>>>>]<[->+<]>>>>]<<<[->>>+<<<]<+<<<<<<<<<]>>>>>
>>>>[>+>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>>[-<<<<<+>>>>>]<<<<<[->>>>>+
<<<<<<[->>>[-<<<+>>>]<<<[->>>+>+<<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>
>>>>>>>]<<<<<<<<<[>>[->>>>>>>>>+<<<<<<<<<]<<<<<<<<<<<]>>[->>>>>>>>>+<<<<<<<<<]<<
+>>>>>>>>]<<<<<<<<<[>[-]<->>>>[-<<<<+>[<->-<<<<<<+>>>>>>]<[->+<]>>>>]<<<[->>>+<<
<]<+<<<<<<<<<]>>>>>>>>>[>>>>[-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<+>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>]>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>+++++++++++++++[[>>>>
>>>>>]<<<<<<<<<-<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+>>>>>>>>>>>>>>>>>>>>>+<<<[<<<<<<
<<<]>>>>>>>>>[>>>[-<<<->>>]+<<<[->>>->[-<<<<+>>>>]<<<<[->>>>+<<<<<<<<<<<<<[<<<<<
<<<<]>>>>[-]+>>>>>[>>>>>>>>>]>+<]]+>>>>[-<<<<->>>>]+<<<<[->>>>-<[-<<<+>>>]<<<[->
>>+<<<<<<<<<<<<[<<<<<<<<<]>>>[-]+>>>>>>[>>>>>>>>>]>[-]+<]]+>[-<[>>>>>>>>>]<<<<<<
<<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]<<<<<<<[->+>>>-<<<<]>>>>>>>>>+++++++++++++++++++
+++++++>>[-<<<<+>>>>]<<<<[->>>>+<<[-]<<]>>[<<<<<<<+<[-<+>>>>+<<[-]]>[-<<[->+>>>-
<<<<]>>>]>>>>>>>>>>>>>[>>[-]>[-]>[-]>>>>>]<<<<<<<<<[<<<<<<<<<]>>>[-]>>>>>>[>>>>>
[-<<<<+>>>>]<<<<[->>>>+<<<+<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>>[-<<<<<<<<
<+>>>>>>>>>]>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>+++++++++++++++[[>>>>>>>>>]+>[-
]>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+[>+>>>>>>>>]<<<
<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>>[-<<<<<+>>>>>]<<<<<[->>>>>+<<<<<<[->>[-<<+>>]<
<[->>+>+<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>>>>>>>>]<<<<<<<<<[>[->>>>
>>>>>+<<<<<<<<<]<<<<<<<<<<]>[->>>>>>>>>+<<<<<<<<<]<+>>>>>>>>]<<<<<<<<<[>[-]<->>>
[-<<<+>[<->-<<<<<<<+>>>>>>>]<[->+<]>>>]<<[->>+<<]<+<<<<<<<<<]>>>>>>>>>[>>>>>>[-<
<<<<+>>>>>]<<<<<[->>>>>+<<<<+<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>+>>>>>>>>
]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>>[-<<<<<+>>>>>]<<<<<[->>>>>+<<<<<<[->>[-<<+
>>]<<[->>+>>+<<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>>>>>>>>]<<<<<<<<<[>
[->>>>>>>>>+<<<<<<<<<]<<<<<<<<<<]>[->>>>>>>>>+<<<<<<<<<]<+>>>>>>>>]<<<<<<<<<[>[-
]<->>>>[-<<<<+>[<->-<<<<<<+>>>>>>]<[->+<]>>>>]<<<[->>>+<<<]<+<<<<<<<<<]>>>>>>>>>
[>>>>[-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<+>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
]>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>>>[-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<+>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>]>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>++++++++
+++++++[[>>>>>>>>>]<<<<<<<<<-<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+[>>>>>>>>[-<<<<<<<+
>>>>>>>]<<<<<<<[->>>>>>>+<<<<<<+<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>>>>>>[
-]>>>]<<<<<<<<<[<<<<<<<<<]>>>>+>[-<-<<<<+>>>>>]>[-<<<<<<[->>>>>+<++<<<<]>>>>>[-<
<<<<+>>>>>]<->+>]<[->+<]<<<<<[->>>>>+<<<<<]>>>>>>[-]<<<<<<+>>>>[-<<<<->>>>]+<<<<
[->>>>->>>>>[>>[-<<->>]+<<[->>->[-<<<+>>>]<<<[->>>+<<<<<<<<<<<<[<<<<<<<<<]>>>[-]
+>>>>>>[>>>>>>>>>]>+<]]+>>>[-<<<->>>]+<<<[->>>-<[-<<+>>]<<[->>+<<<<<<<<<<<[<<<<<
<<<<]>>>>[-]+>>>>>[>>>>>>>>>]>[-]+<]]+>[-<[>>>>>>>>>]<<<<<<<<]>>>>>>>>]<<<<<<<<<
[<<<<<<<<<]>>>>[-<<<<+>>>>]<<<<[->>>>+>>>>>[>+>>[-<<->>]<<[->>+<<]>>>>>>>>]<<<<<
<<<+<[>[->>>>>+<<<<[->>>>-<<<<<<<<<<<<<<+>>>>>>>>>>>[->>>+<<<]<]>[->>>-<<<<<<<<<
<<<<<+>>>>>>>>>>>]<<]>[->>>>+<<<[->>>-<<<<<<<<<<<<<<+>>>>>>>>>>>]<]>[->>>+<<<]<<
<<<<<<<<<<]>>>>[-]<<<<]>>>[-<<<+>>>]<<<[->>>+>>>>>>[>+>[-<->]<[->+<]>>>>>>>>]<<<
<<<<<+<[>[->>>>>+<<<[->>>-<<<<<<<<<<<<<<+>>>>>>>>>>[->>>>+<<<<]>]<[->>>>-<<<<<<<
<<<<<<<+>>>>>>>>>>]<]>>[->>>+<<<<[->>>>-<<<<<<<<<<<<<<+>>>>>>>>>>]>]<[->>>>+<<<<
]<<<<<<<<<<<]>>>>>>+<<<<<<]]>>>>[-<<<<+>>>>]<<<<[->>>>+>>>>>[>>>>>>>>>]<<<<<<<<<
[>[->>>>>+<<<<[->>>>-<<<<<<<<<<<<<<+>>>>>>>>>>>[->>>+<<<]<]>[->>>-<<<<<<<<<<<<<<
+>>>>>>>>>>>]<<]>[->>>>+<<<[->>>-<<<<<<<<<<<<<<+>>>>>>>>>>>]<]>[->>>+<<<]<<<<<<<
<<<<<]]>[-]>>[-]>[-]>>>>>[>>[-]>[-]>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>>>>>[-<
<<<+>>>>]<<<<[->>>>+<<<+<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>+++++++++++++++[
[>>>>>>>>>]+>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+
[>+>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>[-<<<<+>>>>]<<<<[->>>>+<<<<<[->>
[-<<+>>]<<[->>+>+<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>>>>>>>>]<<<<<<<<
<[>[->>>>>>>>>+<<<<<<<<<]<<<<<<<<<<]>[->>>>>>>>>+<<<<<<<<<]<+>>>>>>>>]<<<<<<<<<[
>[-]<->>>[-<<<+>[<->-<<<<<<<+>>>>>>>]<[->+<]>>>]<<[->>+<<]<+<<<<<<<<<]>>>>>>>>>[
>>>[-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<+>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>]>
>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>[-]>>>>+++++++++++++++[[>>>>>>>>>]<<<<<<<<<-<<<<<
<<<<[<<<<<<<<<]>>>>>>>>>-]+[>>>[-<<<->>>]+<<<[->>>->[-<<<<+>>>>]<<<<[->>>>+<<<<<
<<<<<<<<[<<<<<<<<<]>>>>[-]+>>>>>[>>>>>>>>>]>+<]]+>>>>[-<<<<->>>>]+<<<<[->>>>-<[-
<<<+>>>]<<<[->>>+<<<<<<<<<<<<[<<<<<<<<<]>>>[-]+>>>>>>[>>>>>>>>>]>[-]+<]]+>[-<[>>
>>>>>>>]<<<<<<<<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>[-<<<+>>>]<<<[->>>+>>>>>>[>+>>>
[-<<<->>>]<<<[->>>+<<<]>>>>>>>>]<<<<<<<<+<[>[->+>[-<-<<<<<<<<<<+>>>>>>>>>>>>[-<<
+>>]<]>[-<<-<<<<<<<<<<+>>>>>>>>>>>>]<<<]>>[-<+>>[-<<-<<<<<<<<<<+>>>>>>>>>>>>]<]>
[-<<+>>]<<<<<<<<<<<<<]]>>>>[-<<<<+>>>>]<<<<[->>>>+>>>>>[>+>>[-<<->>]<<[->>+<<]>>
>>>>>>]<<<<<<<<+<[>[->+>>[-<<-<<<<<<<<<<+>>>>>>>>>>>[-<+>]>]<[-<-<<<<<<<<<<+>>>>
>>>>>>>]<<]>>>[-<<+>[-<-<<<<<<<<<<+>>>>>>>>>>>]>]<[-<+>]<<<<<<<<<<<<]>>>>>+<<<<<
]>>>>>>>>>[>>>[-]>[-]>[-]>>>>]<<<<<<<<<[<<<<<<<<<]>>>[-]>[-]>>>>>[>>>>>>>[-<<<<<
<+>>>>>>]<<<<<<[->>>>>>+<<<<+<<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>+>[-<-<<<<+>>>>
>]>>[-<<<<<<<[->>>>>+<++<<<<]>>>>>[-<<<<<+>>>>>]<->+>>]<<[->>+<<]<<<<<[->>>>>+<<
<<<]+>>>>[-<<<<->>>>]+<<<<[->>>>->>>>>[>>>[-<<<->>>]+<<<[->>>-<[-<<+>>]<<[->>+<<
<<<<<<<<<[<<<<<<<<<]>>>>[-]+>>>>>[>>>>>>>>>]>+<]]+>>[-<<->>]+<<[->>->[-<<<+>>>]<
<<[->>>+<<<<<<<<<<<<[<<<<<<<<<]>>>[-]+>>>>>>[>>>>>>>>>]>[-]+<]]+>[-<[>>>>>>>>>]<
<<<<<<<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>[-<<<+>>>]<<<[->>>+>>>>>>[>+>[-<->]<[->+
<]>>>>>>>>]<<<<<<<<+<[>[->>>>+<<[->>-<<<<<<<<<<<<<+>>>>>>>>>>[->>>+<<<]>]<[->>>-
<<<<<<<<<<<<<+>>>>>>>>>>]<]>>[->>+<<<[->>>-<<<<<<<<<<<<<+>>>>>>>>>>]>]<[->>>+<<<
]<<<<<<<<<<<]>>>>>[-]>>[-<<<<<<<+>>>>>>>]<<<<<<<[->>>>>>>+<<+<<<<<]]>>>>[-<<<<+>
>>>]<<<<[->>>>+>>>>>[>+>>[-<<->>]<<[->>+<<]>>>>>>>>]<<<<<<<<+<[>[->>>>+<<<[->>>-
<<<<<<<<<<<<<+>>>>>>>>>>>[->>+<<]<]>[->>-<<<<<<<<<<<<<+>>>>>>>>>>>]<<]>[->>>+<<[
->>-<<<<<<<<<<<<<+>>>>>>>>>>>]<]>[->>+<<]<<<<<<<<<<<<]]>>>>[-]<<<<]>>>>[-<<<<+>>
>>]<<<<[->>>>+>[-]>>[-<<<<<<<+>>>>>>>]<<<<<<<[->>>>>>>+<<+<<<<<]>>>>>>>>>[>>>>>>
>>>]<<<<<<<<<[>[->>>>+<<<[->>>-<<<<<<<<<<<<<+>>>>>>>>>>>[->>+<<]<]>[->>-<<<<<<<<
<<<<<+>>>>>>>>>>>]<<]>[->>>+<<[->>-<<<<<<<<<<<<<+>>>>>>>>>>>]<]>[->>+<<]<<<<<<<<
<<<<]]>>>>>>>>>[>>[-]>[-]>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>[-]>[-]>>>>>[>>>>>[-<<<<+
>>>>]<<<<[->>>>+<<<+<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>>>>>>[-<<<<<+>>>>>
]<<<<<[->>>>>+<<<+<<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>+++++++++++++++[[>>>>
>>>>>]+>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]>[-]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+[>+>>
>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>[-<<<<+>>>>]<<<<[->>>>+<<<<<[->>[-<<+
>>]<<[->>+>>+<<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>>>>>>>>]<<<<<<<<<[>
[->>>>>>>>>+<<<<<<<<<]<<<<<<<<<<]>[->>>>>>>>>+<<<<<<<<<]<+>>>>>>>>]<<<<<<<<<[>[-
]<->>>>[-<<<<+>[<->-<<<<<<+>>>>>>]<[->+<]>>>>]<<<[->>>+<<<]<+<<<<<<<<<]>>>>>>>>>
[>+>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>->>>>>[-<<<<<+>>>>>]<<<<<[->>>>>+<<<<
<<[->>>[-<<<+>>>]<<<[->>>+>+<<<<]+>>>>>>>>>]<<<<<<<<[<<<<<<<<<]]>>>>>>>>>[>>>>>>
>>>]<<<<<<<<<[>>[->>>>>>>>>+<<<<<<<<<]<<<<<<<<<<<]>>[->>>>>>>>>+<<<<<<<<<]<<+>>>
>>>>>]<<<<<<<<<[>[-]<->>>>[-<<<<+>[<->-<<<<<<+>>>>>>]<[->+<]>>>>]<<<[->>>+<<<]<+
<<<<<<<<<]>>>>>>>>>[>>>>[-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<+>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>]>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>+++++++++++++++[[>>>>>>>>
>]<<<<<<<<<-<<<<<<<<<[<<<<<<<<<]>>>>>>>>>-]+>>>>>>>>>>>>>>>>>>>>>+<<<[<<<<<<<<<]
>>>>>>>>>[>>>[-<<<->>>]+<<<[->>>->[-<<<<+>>>>]<<<<[->>>>+<<<<<<<<<<<<<[<<<<<<<<<
]>>>>[-]+>>>>>[>>>>>>>>>]>+<]]+>>>>[-<<<<->>>>]+<<<<[->>>>-<[-<<<+>>>]<<<[->>>+<
<<<<<<<<<<<[<<<<<<<<<]>>>[-]+>>>>>>[>>>>>>>>>]>[-]+<]]+>[-<[>>>>>>>>>]<<<<<<<<]>
>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>->>[-<<<<+>>>>]<<<<[->>>>+<<[-]<<]>>]<<+>>>>[-<<<<
->>>>]+<<<<[->>>>-<<<<<<.>>]>>>>[-<<<<<<<.>>>>>>>]<<<[-]>[-]>[-]>[-]>[-]>[-]>>>[
>[-]>[-]>[-]>[-]>[-]>[-]>>>]<<<<<<<<<[<<<<<<<<<]>>>>>>>>>[>>>>>[-]>>>>]<<<<<<<<<
[<<<<<<<<<]>+++++++++++[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>+>>>>>>>>>+<<<<<<<<
<<<<<<[<<<<<<<<<]>>>>>>>[-<<<<<<<+>>>>>>>]<<<<<<<[->>>>>>>+[-]>>[>>>>>>>>>]<<<<<
<<<<[>>>>>>>[-<<<<<<+>>>>>>]<<<<<<[->>>>>>+<<<<<<<[<<<<<<<<<]>>>>>>>[-]+>>>]<<<<
<<<<<<]]>>>>>>>[-<<<<<<<+>>>>>>>]<<<<<<<[->>>>>>>+>>[>+>>>>[-<<<<->>>>]<<<<[->>>
>+<<<<]>>>>>>>>]<<+<<<<<<<[>>>>>[->>+<<]<<<<<<<<<<<<<<]>>>>>>>>>[>>>>>>>>>]<<<<<
<<<<[>[-]<->>>>>>>[-<<<<<<<+>[<->-<<<+>>>]<[->+<]>>>>>>>]<<<<<<[->>>>>>+<<<<<<]<
+<<<<<<<<<]>>>>>>>-<<<<[-]+<<<]+>>>>>>>[-<<<<<<<->>>>>>>]+<<<<<<<[->>>>>>>->>[>>
>>>[->>+<<]>>>>]<<<<<<<<<[>[-]<->>>>>>>[-<<<<<<<+>[<->-<<<+>>>]<[->+<]>>>>>>>]<<
<<<<[->>>>>>+<<<<<<]<+<<<<<<<<<]>+++++[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>+<<<
<<[<<<<<<<<<]>>>>>>>>>[>>>>>[-<<<<<->>>>>]+<<<<<[->>>>>->>[-<<<<<<<+>>>>>>>]<<<<
<<<[->>>>>>>+<<<<<<<<<<<<<<<<[<<<<<<<<<]>>>>[-]+>>>>>[>>>>>>>>>]>+<]]+>>>>>>>[-<
<<<<<<->>>>>>>]+<<<<<<<[->>>>>>>-<<[-<<<<<+>>>>>]<<<<<[->>>>>+<<<<<<<<<<<<<<[<<<
<<<<<<]>>>[-]+>>>>>>[>>>>>>>>>]>[-]+<]]+>[-<[>>>>>>>>>]<<<<<<<<]>>>>>>>>]<<<<<<<
<<[<<<<<<<<<]>>>>[-]<<<+++++[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>-<<<<<[<<<<<<<
<<]]>>>]<<<<.>>>>>>>>>>[>>>>>>[-]>>>]<<<<<<<<<[<<<<<<<<<]>++++++++++[-[->>>>>>>>
>+<<<<<<<<<]>>>>>>>>>]>>>>>+>>>>>>>>>+<<<<<<<<<<<<<<<[<<<<<<<<<]>>>>>>>>[-<<<<<<
<<+>>>>>>>>]<<<<<<<<[->>>>>>>>+[-]>[>>>>>>>>>]<<<<<<<<<[>>>>>>>>[-<<<<<<<+>>>>>>
>]<<<<<<<[->>>>>>>+<<<<<<<<[<<<<<<<<<]>>>>>>>>[-]+>>]<<<<<<<<<<]]>>>>>>>>[-<<<<<
<<<+>>>>>>>>]<<<<<<<<[->>>>>>>>+>[>+>>>>>[-<<<<<->>>>>]<<<<<[->>>>>+<<<<<]>>>>>>
>>]<+<<<<<<<<[>>>>>>[->>+<<]<<<<<<<<<<<<<<<]>>>>>>>>>[>>>>>>>>>]<<<<<<<<<[>[-]<-
>>>>>>>>[-<<<<<<<<+>[<->-<<+>>]<[->+<]>>>>>>>>]<<<<<<<[->>>>>>>+<<<<<<<]<+<<<<<<
<<<]>>>>>>>>-<<<<<[-]+<<<]+>>>>>>>>[-<<<<<<<<->>>>>>>>]+<<<<<<<<[->>>>>>>>->[>>>
>>>[->>+<<]>>>]<<<<<<<<<[>[-]<->>>>>>>>[-<<<<<<<<+>[<->-<<+>>]<[->+<]>>>>>>>>]<<
<<<<<[->>>>>>>+<<<<<<<]<+<<<<<<<<<]>+++++[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>>
+>>>>>>>>>>>>>>>>>>>>>>>>>>>+<<<<<<[<<<<<<<<<]>>>>>>>>>[>>>>>>[-<<<<<<->>>>>>]+<
<<<<<[->>>>>>->>[-<<<<<<<<+>>>>>>>>]<<<<<<<<[->>>>>>>>+<<<<<<<<<<<<<<<<<[<<<<<<<
<<]>>>>[-]+>>>>>[>>>>>>>>>]>+<]]+>>>>>>>>[-<<<<<<<<->>>>>>>>]+<<<<<<<<[->>>>>>>>
-<<[-<<<<<<+>>>>>>]<<<<<<[->>>>>>+<<<<<<<<<<<<<<<[<<<<<<<<<]>>>[-]+>>>>>>[>>>>>>
>>>]>[-]+<]]+>[-<[>>>>>>>>>]<<<<<<<<]>>>>>>>>]<<<<<<<<<[<<<<<<<<<]>>>>[-]<<<++++
+[-[->>>>>>>>>+<<<<<<<<<]>>>>>>>>>]>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>-<<<<<<[<<<<
<<<<<]]>>>]`,
    "squarenums.b": `++++[>+++++<-]>[<+++++>-]+<+[
>[>+>+<<-]++>>[<<+>>-]>>>[-]++>[-]+
>>>+[[-]++++++>>>]<<<[[<++++++++<++>>-]+<.<[>----<-]<]
<<[>>>>>[>>>[-]+++++++++<[>-<-]+++++++++>[-[<->-]+[<<<]]<[>+<-]>]<<-]<<-
]
[Outputs square numbers from 0 to 10000.
Daniel B Cristofani (cristofdathevanetdotcom)
http://www.hevanet.com/cristofd/brainfuck/]`,
    "triangle.b": `[ This program prints Sierpinski triangle on 80-column display. ]
[ This program prints Sierpinski triangle on 80-column display. ]
                               >    
                              + +    
                             +   +    
                            [ < + +    
                           +       +    
                          + +     + +    
                         >   -   ]   >    
                        + + + + + + + +    
                       [               >    
                      + +             + +    
                     <   -           ]   >    
                    > + + >         > > + >    
                   >       >       +       <    
                  < <     < <     < <     < <    
                 <   [   -   [   -   >   +   <    
                ] > [ - < + > > > . < < ] > > >    
               [                               [    
              - >                             + +    
             +   +                           +   +
            + + [ >                         + + + +    
           <       -                       ]       >    
          . <     < [                     - >     + <    
         ]   +   >   [                   -   >   +   +    
        + + + + + + + +                 < < + > ] > . [    
       -               ]               >               ]    
      ] +             < <             < [             - [    
     -   >           +   <           ]   +           >   [    
    - < + >         > > - [         - > + <         ] + + >    
   [       -       <       -       >       ]       <       <    
  < ]     < <     < <     ] +     + +     + +     + +     + +    
 +   .   +   +   +   .   [   -   ]   <   ]   +   +   +   +   +    
* * * * * M a d e * B y : * N Y Y R I K K I * 2 0 0 2 * * * * *    `,
        "yapi.b": `[ yet another pi calculation program in bf

Just like for pi16.b the accuracy of the result depends on the cellsize:
    
    - using  8 bit cells causes an overflow after 4 digits
    - using 16 bit cells causes an overflow after 537 digits
    - using 32 bit cells causes an overflow after several millions of digits
    
It's about ~38 times shorter than pi16.b, ~364 times faster and works with
not-wrapping (bignum) implementations. 
    
by Felix Nawothnig (felix.nawothnig@t-online.de) ]

>  +++++ +++++ +++++ (15 digits)

[<+>>>>>>>>++++++++++<<<<<<<-]>+++++[<+++++++++>-]+>>>>>>+[<<+++[>>[-<]<[>]<-]>>
[>+>]<[<]>]>[[->>>>+<<<<]>>>+++>-]<[<<<<]<<<<<<<<+[->>>>>>>>>>>>[<+[->>>>+<<<<]>
>>>>]<<<<[>>>>>[<<<<+>>>>-]<<<<<-[<<++++++++++>>-]>>>[<<[<+<<+>>>-]<[>+<-]<++<<+
>>>>>>-]<<[-]<<-<[->>+<-[>>>]>[[<+>-]>+>>]<<<<<]>[-]>+<<<-[>>+<<-]<]<<<<+>>>>>>>
>[-]>[<<<+>>>-]<<++++++++++<[->>+<-[>>>]>[[<+>-]>+>>]<<<<<]>[-]>+>[<<+<+>>>-]<<<
<+<+>>[-[-[-[-[-[-[-[-[-<->[-<+<->>]]]]]]]]]]<[+++++[<<<++++++++<++++++++>>>>-]<
<<<+<->>>>[>+<<<+++++++++<->>>-]<<<<<[>>+<<-]+<[->-<]>[>>.<<<<[+.[-]]>>-]>[>>.<<
-]>[-]>[-]>>>[>>[<<<<<<<<+>>>>>>>>-]<<-]]>>[-]<<<[-]<<<<<<<<]++++++++++.`
}

runBtn.addEventListener("click", try_run);
minifyBtn.addEventListener("click", minify);
loadInput.addEventListener("change", load_example);

function try_run() {
    statusObj.innerHTML = "Running...";
    runBtn.className = "inactive_button";
    runBtn.removeEventListener("click", try_run);
    setTimeout(run_code, 20);
}

function run_code() {
    var startTime = new Date().getTime();

    // Create a new 30,000 size array, with each cell initialized with the value of 0. Memory can expand.
    const MEMORY_SIZE = Number(document.getElementById("memory_size").value);
    const memory = new Array(MEMORY_SIZE).fill(0);
    // Set max generations
    let currentGen = 1;
    const GEN_SIZE = Number(document.getElementById("generation_size").value);
    // Instruction pointer (Points to the current INSTRUCTION)
    let ipointer = 0;
    // Memory pointer (Points to a cell in MEMORY)
    let mpointer = 0;
    // Address stack. Used to track addresses (index) of left brackets
    let astack = [];
    // Input pointer. Used to track which characters in the input section is being read
    let inputPointer = 0;

    let program = editor.value;
    let input = inputArea.value;
    let output = "";

    let end = false;
    let failed = false;

    while (!end) {

        switch (program[ipointer]) {
            case '>':
                if ((mpointer == memory.length - 1) && (document.getElementById("dynamic_memory").value == "on"))
                    // only increase memory array if dynamic memory is on
                    /* If we try to access memory beyond what is currently available, expand array */
                    memory.push(0, 0, 0, 0, 0);
                mpointer++;
                break;
            case '<':
                if (mpointer > 0)
                    mpointer--;
                break;
            case '+':
                memory[mpointer]++;
                break;
            case '-':
                memory[mpointer]--;
                break;
            case '.':
                output += String.fromCharCode(memory[mpointer]);
                break;
            case ',':
                // Set a default value to return in case there is no input to consume
                let val = 0;

                // If input isn't empty
                if (inputPointer <= input.length) {
                    // Get the character code of the first character of the string
                    val = input.charCodeAt(inputPointer);
                    inputPointer++;
                }

                memory[mpointer] = val;
                break;
            case '[':
                if (memory[mpointer]) { // If non-zero
                    astack.push(ipointer);
                } else { // Skip to matching right bracket
                    let count = 0;
                    let trailStart = ipointer + 1;
                    while (true) {
                        ipointer++;
                        if (!program[ipointer]) {
                            break;
                        }
                        if (program[ipointer] === "[") count++;
                        else if (program[ipointer] === "]") {
                            if (count) count--;
                            else break;
                        }
                    }
                }
                break;
            case ']':
                //Pointer is automatically incremented every iteration, therefore we must decrement to get the correct value
                ipointer = astack.pop() - 1;
                break;
            case undefined: // We have reached the end of the program
                end = true;
                break;
            default: // We ignore any character that are not part of regular Brainfuck syntax
                break;
        }
        currentGen++;
        ipointer++;

        if (currentGen > GEN_SIZE) {
            statusObj.innerHTML = "Failed: Reached generation limit of " + GEN_SIZE;
            end = true;
            failed = true;
        }
    }

    if (!failed) {
        let endTime = new Date().getTime();
        let completionTime = endTime - startTime;

        outputConsole.innerHTML = output;
        statusObj.innerHTML = "Finished at generation " + currentGen.toLocaleString("en-US") + " in " + completionTime.toLocaleString("en-US") + "ms";
    }

    runBtn.className = "active_button";
    runBtn.addEventListener("click", try_run);
}

function minify() {
    const currentCode = editor.value;
    let output = "";
    const acceptableChars = ["<", ">", "+", "-", ".", ",", "[", "]"];

    for (let i = 0; i < currentCode.length; i++) {
        const char = currentCode[i];
        if (acceptableChars.includes(char)) {
            output += char;
        }
    }

    editor.value = output;
}

function load_example() {
    // load example set by user
    editor.value = examples[loadInput.value];
    run_code()
}