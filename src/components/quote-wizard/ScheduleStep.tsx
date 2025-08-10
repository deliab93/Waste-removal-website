
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronLeft, ChevronRight, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ScheduleData {
  date: Date | undefined;
  time: string;
  frequency: string;
}

interface ScheduleStepProps {
  scheduleData: ScheduleData;
  onScheduleUpdate: (schedule: ScheduleData) => void;
  additionalInfo: string;
  onAdditionalInfoUpdate: (info: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ScheduleStep = ({ 
  scheduleData, 
  onScheduleUpdate, 
  additionalInfo, 
  onAdditionalInfoUpdate, 
  onNext, 
  onPrev 
}: ScheduleStepProps) => {
  const handleScheduleChange = (field: keyof ScheduleData, value: any) => {
    onScheduleUpdate({
      ...scheduleData,
      [field]: value
    });
  };

  const frequencies = [
    { value: 'one-time', label: 'One-time service' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' }
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  const canProceed = scheduleData.date && scheduleData.time && scheduleData.frequency;

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">Schedule your service</h3>
      
      <div className="max-w-md mx-auto space-y-6">
        <div>
          <Label>Preferred Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !scheduleData.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {scheduleData.date ? format(scheduleData.date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={scheduleData.date}
                onSelect={(date) => handleScheduleChange('date', date)}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="time">Preferred Time *</Label>
          <select
            id="time"
            value={scheduleData.time}
            onChange={(e) => handleScheduleChange('time', e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="frequency">Service Frequency *</Label>
          <select
            id="frequency"
            value={scheduleData.frequency}
            onChange={(e) => handleScheduleChange('frequency', e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
          >
            <option value="">Select frequency</option>
            {frequencies.map((freq) => (
              <option key={freq.value} value={freq.value}>{freq.label}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => onAdditionalInfoUpdate(e.target.value)}
            placeholder="Any special requirements or additional details..."
            className="mt-1"
            rows={4}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={onPrev}
          variant="outline"
          className="px-8 py-3"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3"
        >
          Review Quote <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ScheduleStep;
