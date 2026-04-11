const res=document.getElementById('res');

function run(){
  const txt=(document.getElementById('input').value||'').toLowerCase();
  let out='Fix Suggestions:\n';

  if(txt.includes('hydration')){
    out += '- Ensure server/client HTML match\n';
  }
  if(txt.includes('too many re-renders')){
    out += '- Avoid setState in render cycle\n';
  }
  if(txt.includes('invalid hook')){
    out += '- Call hooks only at top level\n';
  }
  if(txt.includes('key')){
    out += '- Provide unique key for list items\n';
  }
  if(txt.includes('controlled') || txt.includes('uncontrolled')){
    out += '- Keep input controlled or uncontrolled consistently\n';
  }
  if(txt.includes('cannot update')){
    out += '- Avoid state updates during render\n';
  }
  if(txt.includes('objects are not valid')){
    out += '- Render primitives or map objects properly\n';
  }

  if(out==='Fix Suggestions:\n'){
    out += '- General React error: check component logic and hooks usage\n';
  }

  out += '- Review state and props flow\n';
  out += '- Validate hook rules\n';

  res.innerText = out;
}