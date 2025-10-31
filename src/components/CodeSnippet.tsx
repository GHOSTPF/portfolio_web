import { motion } from "framer-motion";

const CodeSnippet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-lg border border-primary/20 p-6 max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-accent/60"></div>
        </div>
        <span className="text-xs text-muted-foreground ml-2">portfolio.tsx</span>
      </div>

      <div className="font-mono text-sm space-y-2">
        <div className="flex">
          <span className="text-muted-foreground mr-4">1</span>
          <span>
            <span className="text-secondary">type</span>{" "}
            <span className="text-foreground">DeveloperProps</span> = {"{"}{" "}
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">2</span>
          <span className="ml-4">
            skills: <span className="text-accent">string</span>[];
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">3</span>
          <span className="ml-4">
            passion: <span className="text-accent">&quot;web&quot;</span> |{" "}
            <span className="text-accent">&quot;mobile&quot;</span>;
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">4</span>
          <span className="ml-4">
            coffee: <span className="text-accent">number</span>;
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">5</span>
          <span>{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">6</span>
          <span></span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">7</span>
          <span>
            <span className="text-secondary">const</span>{" "}
            <span className="text-primary">Developer</span> ={" "}
            <span className="text-muted-foreground">()</span> {"=>"}
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">8</span>
          <span className="ml-4">
            <span className="text-secondary">return</span> {"("}
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">9</span>
          <span className="ml-8 text-muted-foreground">
            {"<"}Building amazing apps{" />"}
          </span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground mr-4">10</span>
          <span className="ml-4">{");"}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
