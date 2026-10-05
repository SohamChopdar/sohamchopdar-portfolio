import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { PortfolioHeader } from '@/components/portfolio-header';
import { PortfolioFooter } from '@/components/portfolio-footer';
import { Hero } from '@/components/home/hero';
import { About } from '@/components/home/about';
import { Skills } from '@/components/home/skills';
import { Projects } from '@/components/home/projects';
import { Experience } from '@/components/home/experience';
import { Contact } from '@/components/home/contact';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Soham Chopdar — Software Engineer',description:'Software engineer from Pune building reliable products and intelligent systems. Explore my projects, skills, and experience.'});}
export default function HomePage(){return <div className="portfolio-shell"><PortfolioHeader/><main><Hero/><About/><Skills/><Projects/><Experience/><Contact/></main><PortfolioFooter/></div>}
