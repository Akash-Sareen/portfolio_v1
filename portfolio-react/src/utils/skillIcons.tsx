import React from 'react';
import { IconContext } from 'react-icons';
import { DiJava } from 'react-icons/di';
import {
  SiJavascript, SiTypescript, SiPython, SiMysql, SiGo,
  SiSpring, SiSpringboot, SiAngular, SiReact, SiHtml5,
  SiMongodb, SiPostgresql, SiElasticsearch, SiSnowflake,
  SiDocker, SiGit, SiJenkins, SiRedhatopenshift, SiApachemaven,
  SiTwilio, SiSlack, SiGrafana, SiApachekafka
} from 'react-icons/si';
import { FaTerminal, FaAws, FaCss3Alt, FaDatabase, FaCode } from 'react-icons/fa';

export function getSkillIcon(skillName: string): React.ReactNode {
  return (
    <IconContext.Provider value={{ size: '1.2em', color: 'currentColor' }}>
      {_getIcon(skillName)}
    </IconContext.Provider>
  );
}

function _getIcon(skillName: string): React.ReactNode {
  const s = skillName.toLowerCase();
  
  if (s.includes('java') && !s.includes('script')) return <DiJava />;
  if (s.includes('javascript')) return <SiJavascript />;
  if (s.includes('typescript')) return <SiTypescript />;
  if (s.includes('python')) return <SiPython />;
  if (s.includes('sql') || s.includes('mysql')) return <SiMysql />;
  if (s === 'go') return <SiGo />;

  if (s.includes('spring boot')) return <SiSpringboot />;
  if (s.includes('spring')) return <SiSpring />;
  if (s.includes('angular')) return <SiAngular />;
  if (s.includes('react')) return <SiReact />;
  if (s.includes('html')) return <SiHtml5 />;
  if (s.includes('css')) return <FaCss3Alt />;

  if (s.includes('mongo')) return <SiMongodb />;
  if (s.includes('postgres')) return <SiPostgresql />;
  if (s.includes('elastic')) return <SiElasticsearch />;
  if (s.includes('snowflake')) return <SiSnowflake />;
  if (s.includes('db2')) return <FaDatabase />;

  if (s.includes('docker')) return <SiDocker />;
  if (s === 'git') return <SiGit />;
  if (s.includes('jenkins')) return <SiJenkins />;
  if (s === 'aws') return <FaAws />;
  if (s.includes('openshift')) return <SiRedhatopenshift />;
  if (s.includes('maven')) return <SiApachemaven />;

  if (s.includes('twilio')) return <SiTwilio />;
  if (s.includes('slack')) return <SiSlack />;
  if (s.includes('sonar')) return <FaCode />;
  if (s.includes('grafana')) return <SiGrafana />;
  if (s.includes('kafka')) return <SiApachekafka />;

  return <FaTerminal />;
}
